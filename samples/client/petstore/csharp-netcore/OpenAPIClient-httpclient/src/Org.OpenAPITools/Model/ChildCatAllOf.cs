/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using FileParameter = Org.OpenAPITools.Client.FileParameter;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;
using OpenAPIClientUtils = Org.OpenAPITools.Client.ClientUtils;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// ChildCatAllOf
    /// </summary>
    [DataContract(Name = "ChildCat_allOf")]
    public partial class ChildCatAllOf : IEquatable<ChildCatAllOf>, IValidatableObject
    {
        /// <summary>
        /// Defines PetType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum PetTypeEnum
        {
            /// <summary>
            /// Enum ChildCat for value: ChildCat
            /// </summary>
            [EnumMember(Value = "ChildCat")]
            ChildCat = 1
        }


        /// <summary>
        /// Gets or Sets PetType
        /// </summary>
        [DataMember(Name = "pet_type", EmitDefaultValue = false)]
        public PetTypeEnum? PetType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ChildCatAllOf" /> class.
        /// </summary>
        /// <param name="name">name.</param>
        /// <param name="petType">petType (default to PetTypeEnum.ChildCat).</param>
        public ChildCatAllOf(string name = default(string), PetTypeEnum? petType = PetTypeEnum.ChildCat)
        {
            this.Name = name;
            this.PetType = petType;
            this.AdditionalProperties = new Dictionary<string, object>();
        }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ChildCatAllOf {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  PetType: ").Append(PetType).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return OpenAPIClientUtils.compareLogic.Compare(this, input as ChildCatAllOf).AreEqual;
        }

        /// <summary>
        /// Returns true if ChildCatAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of ChildCatAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ChildCatAllOf input)
        {
            return OpenAPIClientUtils.compareLogic.Compare(this, input).AreEqual;
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.PetType.GetHashCode();
                if (this.AdditionalProperties != null)
                {
                    hashCode = (hashCode * 59) + this.AdditionalProperties.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
